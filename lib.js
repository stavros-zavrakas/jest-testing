import { createSelector } from 'reselect';

// const { createSelector } = require('reselect');

const selectActivity = state => state.activity;

export const selectRoundData = createSelector(
    selectActivity,
    activity => {
        const { round_index, questions } = activity;

        const { round_title, round_type } = questions[round_index];

        return {

            round_title,

            round_type

        };
    }
);

// module.exports = selectRoundData;
