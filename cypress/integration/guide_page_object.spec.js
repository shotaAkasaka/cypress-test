import Guide from "../page_object/pc/guide";

const guide = new Guide();

describe('Guide Page', function(){
    it('open guide page', function(){
      guide.visit()
    })
})

describe('Plan Modal', function(){
    it('open plan modal', function(){
      guide.planmodal()
    })
})