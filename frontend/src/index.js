import css from "./app/css/index.css"
import {updateTooltipDom} from "./app/js/service/popover";
import {testRun} from "./app/js/controller/test-send-msg-controller"

//jalankan tooltip
updateTooltipDom();

//test untuk run program sederhana
testRun()