'use strict';

import { expect } from 'chai';

import { selectRoundData } from '../lib';

describe('lib tests', () => {

  it('should throw typeError if redux is empty', () => {
    expect(selectRoundData).to.throw(TypeError);
  });

  // @todo: it breaks for at least 3 cases 
  // the lib must be improved in 3 different cases

  it('should return round data', () => {
    const data = selectRoundData({
      activity: {
        round_index: 0,
        questions: [{
          round_title: 'round_title',
          round_type: 'round_type'
        }]
      }
    });

    expect(data).to.deep.equal({
      round_title: 'round_title',
      round_type: 'round_type'
    });
  });

})