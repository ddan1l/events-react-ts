import {EventActionEnum, SetEventsAction, SetGuestsAction} from "./types";
import {IUser} from "../../../models/IUser";
import {IEvent} from "../../../models/IEvent";
import {AppDispatch} from "../../index";
import UserService from "../../../api/UserService";

export const EventActionCreators = {
    setGuests: (payload: IUser[]): SetGuestsAction => ({type: EventActionEnum.SET_GUESTS, payload}),
    setEvents: (payload: IEvent[]): SetEventsAction => ({type: EventActionEnum.SET_EVENTS, payload}),
    fetchGuests: () => async  (dispatch: AppDispatch) => {
        try {
            const response = await UserService.getUsers();
            dispatch(EventActionCreators.setGuests(response.data));
        } catch (e) {
            console.log(e);
        }
    },
    createEvent: (event: IEvent) => async  (dispatch: AppDispatch) => {

        try {
            const events = localStorage.getItem("events") || '[]';
            const data = JSON.parse(events) as IEvent[];
            data.push(event);
            dispatch(EventActionCreators.setEvents(data));
            console.log(JSON.stringify(events))
            localStorage.setItem("events", JSON.stringify(data))
        } catch (e) {
            console.log(e);
        }
    },
    fetchEvents: (username: string) => async  (dispatch: AppDispatch) => {
        try{
            const events = localStorage.getItem("events") || '[]';
            const data = JSON.parse(events) as IEvent[];
            const currentUserEvents = data.filter(ev => ev.author === username || ev.guest === username);
            dispatch(EventActionCreators.setEvents(currentUserEvents));
        } catch (e){
            console.log(e)
        }
    }
}