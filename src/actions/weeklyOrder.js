import Api from '../../server/api';
import { parse } from 'url';


export const error = (msg) => ({
    type: 'ERROR',
    msg
  });
//SET_WeeklyOrder
  export const setWeeklyOrder = (weeklyOrderes) => ({
    type: 'SET_ WeekleyOrder',
    weeklyOrderes
  });

  export const startSetWeeklyOrder = () => {
    return (dispatch, getState) => {
      const uid = getState().auth.ID;
    //fetching WeeklyOrder from database and parse them to array
    return Api.post("/weeklyOrder", { responseType: 'json' }).then((Response) => {

        let i = 1;
        const weeklyOrderes = [];
        const weeklyOrder = JSON.parse(Response.data.d);
        weeklyOrder.forEach(child => {
          weeklyOrderes.push({
            id: i++,
            ...child
          });
        });

        debugger;
        if(weeklyOrder != null) {
        //   localStorage.setItem("user",user.ID);
            dispatch(setWeeklyOrder(weeklyOrderes));
        }
        else {
          dispatch(error('Cant resolveWeekly Order'));
        }
      }).catch((error) => {
        console.log(error);
      });



    };
  };