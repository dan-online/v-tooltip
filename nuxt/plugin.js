import Vue from 'vue'
import VTooltip from '../'

Vue.use(VTooltip, <%= serialize(options) %>)

export default function (ctx, inject) {
	inject('VTooltip', VTooltip)
}
