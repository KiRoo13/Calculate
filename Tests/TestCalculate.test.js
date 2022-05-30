import { mount } from "@vue/test-utils";
import CalculateIn from '../src/components/CalculateIn.vue'

describe('CalcTests',()=>{
   it('test operand1',()=>{
       const wrapper = mount(CalculateIn)
       const operand1 = wrapper.find('input[name=operand1]')
       operand1.setValue('1')

       expect(Number(wrapper.vm.operand1)).toBe(1)
   })

  it('test operand2',()=>{
      const wrapper = mount(CalculateIn)
      const operand2 = wrapper.find('input[name=operand2]')
      operand2.element.value = '2'
      operand2.trigger('input')

      expect(Number(wrapper.vm.operand2)).toBe(2)
  })

  it('test sum',()=>{
   const wrapper = mount(CalculateIn)
   const operand1 = wrapper.find('input[name=operand1]')
   const operand2 = wrapper.find('input[name=operand2]')
   operand1.setValue('4')
   operand2.setValue('5')

   const btn = wrapper.find('button[name=sum]')
   btn.trigger('click')

   expect(wrapper.vm.result).toBe(9)
 })

 it('test minus',()=>{
   const wrapper = mount(CalculateIn)
   const operand1 = wrapper.find('input[name=operand1]')
   const operand2 = wrapper.find('input[name=operand2]')
   operand1.setValue('4')
   operand2.setValue('5')

   const btn = wrapper.find('button[name=minus]')
   btn.trigger('click')

   expect(wrapper.vm.result).toBe(-1)
 })


 it('test um',()=>{
   const wrapper = mount(CalculateIn)
   const operand1 = wrapper.find('input[name=operand1]')
   const operand2 = wrapper.find('input[name=operand2]')
   operand1.setValue('4')
   operand2.setValue('5')

   const btn = wrapper.find('button[name=um]')
   btn.trigger('click')

   expect(wrapper.vm.result).toBe(20)
 })


 it('test del',()=>{
   const wrapper = mount(CalculateIn)
   const operand1 = wrapper.find('input[name=operand1]')
   const operand2 = wrapper.find('input[name=operand2]')
   operand1.setValue('10')
   operand2.setValue('2')

   const btn = wrapper.find('button[name=del]')
   btn.trigger('click')

   expect(wrapper.vm.result).toBe(5)
 })


 it('test step',()=>{
   const wrapper = mount(CalculateIn)
   const operand1 = wrapper.find('input[name=operand1]')
   const operand2 = wrapper.find('input[name=operand2]')
   operand1.setValue('10')
   operand2.setValue('2')

   const btn = wrapper.find('button[name=step]')
   btn.trigger('click')

   expect(wrapper.vm.result).toBe(100)
 })


 it('test clear',()=>{
   const wrapper = mount(CalculateIn)
   const result = wrapper.find('span[name=result]')
   result.element.value = '10'

   const btn = wrapper.find('button[name=clear]')
   btn.trigger('click')

   expect(wrapper.vm.result).toBe('')
 })


 it('test open keyboard',()=>{
   const wrapper = mount(CalculateIn)
   const keyboard = wrapper.find('label[name=keyboard]')
   
   keyboard.trigger('click')

   expect(wrapper.vm.show2).toBe(true)

 })


  it('test button value display',()=>{
   const wrapper = mount(CalculateIn)
   const buttonkeyboard = wrapper.find('button[name=buttonkeyboard]')
   buttonkeyboard.trigger('click')

   expect(Number(wrapper.vm.operand1)).toBe(1)
  })


  it('test remove',()=>{
    const wrapper = mount(CalculateIn)
    const btnn = wrapper.find('button[name=remove]')

    const operand1 = wrapper.find('input[name=operand1]')
    operand1.setValue('10')
 
    btnn.trigger('click')
 
    expect(wrapper.vm.operand1).toBe('1')
  })
})

