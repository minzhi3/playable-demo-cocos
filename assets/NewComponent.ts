import { _decorator, Component, Node } from "cc";
const { ccclass, property } = _decorator;
declare const mraid: any;
@ccclass("NewComponent")
export class NewComponent extends Component {
  start() {}

  update(deltaTime: number) {}
  install() {
    mraid.open();
  }
}
