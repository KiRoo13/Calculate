import { mount } from "@vue/test-utils";
import HelloWorld from '../src/components/HelloWorld.vue';


describe('Tests', ()=> {
   test('Test props', ()=>{
      const wrapper = mount(HelloWorld, {
         propsData: {
            mas: 'Component template should contain exactly one root element.'
         }
      })
      expect(wrapper.text()).toEqual('Component template should contain exactly one root element.')
   })
})

