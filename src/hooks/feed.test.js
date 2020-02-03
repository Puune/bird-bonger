import React from 'react';
import _ from 'lodash';
import '@testing-library/jest-dom/extend-expect';
import { renderHook } from '@testing-library/react-hooks'
import useFeed from '../hooks/feed';
import TestRenderer from 'react-test-renderer';
const {act} = TestRenderer;


describe('feed statehook', ()=> {
  let { result } = renderHook(()=> useFeed())

  beforeEach(()=> {
    act(()=> {
      result.current.set([]);
    })
  })

  test('accepts a new item', ()=> {
    act(()=>{
      result.current.set({
        "id": 33,
        "timestamp": "2011-07-22, 20:20",
        "species": "Donkey",
        "rarity": "common",
        "note": "peruna tapio salaatti jäätelö kinuski reikäleipä suklaarasia",
        "date": "2000-01-01, 23:12"
      })
    })    
    expect(_.includes(result.current.observations, "Donkey")).toBe(true);
  })

  //getList returns a list of observations in order of date
  test('sorts items in order of timestamp', ()=> {
    act(()=> {
      result.current.set(
        [{
          "id": 1,
          "timestamp":"2001-12-20, 20:00",
          "species": "CEO",
          "rarity": "common",
          "note": "sdo posak doposkda oksokdas podas pod pokads",
          "date": "2001-12-20, 20:00"
        },
        {
          "id": 2,
          "timestamp": "2000-02-20, 13:30",
          "species": "Lemur",
          "rarity": "common",
          "note": "aspåds adspodsaåpo åopdasåpo adspåodsp p",
          "date": "2000-02-20, 13:30"
          },
        {
          "id": 3,
          "timestamp": "2001-01-01, 14:00",
          "species": "Koala",
          "rarity": "common",
          "note": "fibjhdsiui evin ine vineuevive un veniu eiun iun",
          "date": "2010-01-01, 14:00"  
        },
        {
          "id": 4,
          "timestamp": "2100-12-3, 10:13",
          "species": "Dingo",
          "rarity": "common",
          "note": "immmiecn nu ecunh becd xs wcfvtrx  b evv",
          "date": "2100-12-3, 10:13"
        }]
      )
    })

    act(()=> {
      result.current.sort();
    })    
    let sorted = result.current.observations;
    sorted = sorted.map((item) => item.id);
    expect(sorted.join('')).toBe('4132');
  })

  //you can choose a sorter

  //after choosing a sorter a list in correct order is returned
})