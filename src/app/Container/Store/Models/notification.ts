export class Notification {
    noti_id;
}
export interface INotification {
    id: number;
    text: string;
    date: string;
    type: string;
    message: string;
    read: boolean;
}