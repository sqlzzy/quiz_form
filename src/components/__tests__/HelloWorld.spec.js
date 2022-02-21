import { mount } from "@vue/test-utils";
import HelloWorld from "../HelloWorld.vue";

const msg = 'Hello Vue 3 + Vite'

describe('HelloWorld.vue', () => {
    it('should render text correctly', () => {
        const propsData = { msg };
        const wrapper = mount(HelloWorld, { propsData });
        const h1 = wrapper.find('h1');
        expect(h1.text()).toContain(msg);
    })
})
