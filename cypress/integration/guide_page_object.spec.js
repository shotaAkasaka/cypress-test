import Guide from "../page_object/guide";

describe('Plan Modal', function(){
    it('plan modal', function(){
      const guide = new Guide();
      guide.visit()
      guide.planmodal()
    })
})