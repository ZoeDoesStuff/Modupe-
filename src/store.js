import { createState } from "@hookstate/core"

export const initial = {
    user: {isAuthenticated:false},
    questions: []
}
const store = createState(initial)
export default store 