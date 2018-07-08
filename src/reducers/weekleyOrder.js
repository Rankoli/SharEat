const WeekleyOrderReducerDefaultState = [];

const WeekleyOrderReducer = (state = WeekleyOrderReducerDefaultState, action) => {
    switch (action.type) {

      case 'SET_ WeekleyOrder': return action.weeklyOrderes;

      default:
        return state;
    }
  };

  export default WeekleyOrderReducer;