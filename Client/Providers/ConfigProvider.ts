import {Injectable} from 'angular2/core'

@Injectable()
export class ConfigProvider {

    enableMockObject = false

    gameId: number = 3
    channel: string = 'test'
    mode: number = 0
    serverUrl: string = 'http://jok.io:8082'
    //serverUrl: string = 'http://localhost:3000'
    enableMessageLogging: boolean = true;
    protocols: string[] = ['polling', 'websocket']
    sid: string = this.getCookie('sid')
    playUrl: string = location.origin + location.pathname + (location.pathname.lastIndexOf('/') == location.pathname.length - 1 ? '' : '/')
    currentUserId: number


    //#region Cookies
    private getCookie(name: string) {
        let ca: Array<string> = document.cookie.split(';');
        let caLen: number = ca.length;
        let cookieName = name + "=";
        let c: string;

        for (let i: number = 0; i < caLen; i += 1) {
            c = ca[i].replace(/^\s\+/g, "");
            if (c.indexOf(cookieName) == 0) {
                return c.substring(cookieName.length, c.length);
            }
        }
        return "";
    }

    private deleteCookie(name) {
        this.setCookie(name, "", -1);
    }

    private setCookie(name: string, value: string, expireDays: number, path: string = "") {
        let d: Date = new Date();
        d.setTime(d.getTime() + expireDays * 24 * 60 * 60 * 1000);
        let expires: string = "expires=" + d.toUTCString();
        document.cookie = name + "=" + value + "; " + expires + (path.length > 0 ? "; path=" + path : "");
    }
    //#endregion
}
