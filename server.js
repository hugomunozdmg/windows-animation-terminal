import { say } from "yodasay"
import { greeetings, action } from "./server_1.js"

console.log(say({text: greeetings + action()}))