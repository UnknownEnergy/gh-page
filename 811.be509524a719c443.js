"use strict";(self.webpackChunkchatgpt_api=self.webpackChunkchatgpt_api||[]).push([[811],{80811:(h,p,a)=>{a.r(p),a.d(p,{FewShotPromptTemplate:()=>s});var l=a(15861),o=a(21782),n=a(33087),u=a(194);class s extends o.Al{constructor(t){if(super(t),Object.defineProperty(this,"examples",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"exampleSelector",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"examplePrompt",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"suffix",{enumerable:!0,configurable:!0,writable:!0,value:""}),Object.defineProperty(this,"exampleSeparator",{enumerable:!0,configurable:!0,writable:!0,value:"\n\n"}),Object.defineProperty(this,"prefix",{enumerable:!0,configurable:!0,writable:!0,value:""}),Object.defineProperty(this,"templateFormat",{enumerable:!0,configurable:!0,writable:!0,value:"f-string"}),Object.defineProperty(this,"validateTemplate",{enumerable:!0,configurable:!0,writable:!0,value:!0}),Object.assign(this,t),void 0!==this.examples&&void 0!==this.exampleSelector)throw new Error("Only one of 'examples' and 'example_selector' should be provided");if(void 0===this.examples&&void 0===this.exampleSelector)throw new Error("One of 'examples' and 'example_selector' should be provided");if(this.validateTemplate){let e=this.inputVariables;this.partialVariables&&(e=e.concat(Object.keys(this.partialVariables))),(0,n.af)(this.prefix+this.suffix,this.templateFormat,e)}}_getPromptType(){return"few_shot"}getExamples(t){var e=this;return(0,l.Z)(function*(){if(void 0!==e.examples)return e.examples;if(void 0!==e.exampleSelector)return e.exampleSelector.selectExamples(t);throw new Error("One of 'examples' and 'example_selector' should be provided")})()}partial(t){var e=this;return(0,l.Z)(function*(){const r={...e};return r.inputVariables=e.inputVariables.filter(i=>!(i in t)),r.partialVariables={...e.partialVariables??{},...t},new s(r)})()}format(t){var e=this;return(0,l.Z)(function*(){const r=yield e.mergePartialAndUserVariables(t),i=yield e.getExamples(r),m=yield Promise.all(i.map(x=>e.examplePrompt.format(x))),f=[e.prefix,...m,e.suffix].join(e.exampleSeparator);return(0,n.SM)(f,e.templateFormat,r)})()}serialize(){if(this.exampleSelector||!this.examples)throw new Error("Serializing an example selector is not currently supported");if(void 0!==this.outputParser)throw new Error("Serializing an output parser is not currently supported");return{_type:this._getPromptType(),input_variables:this.inputVariables,example_prompt:this.examplePrompt.serialize(),example_separator:this.exampleSeparator,suffix:this.suffix,prefix:this.prefix,template_format:this.templateFormat,examples:this.examples}}static deserialize(t){return(0,l.Z)(function*(){const{example_prompt:e}=t;if(!e)throw new Error("Missing example prompt");const r=yield u.PromptTemplate.deserialize(e);let i;if(!Array.isArray(t.examples))throw new Error("Invalid examples format. Only list or string are supported.");return i=t.examples,new s({inputVariables:t.input_variables,examplePrompt:r,examples:i,exampleSeparator:t.example_separator,prefix:t.prefix,suffix:t.suffix,templateFormat:t.template_format})})()}}}}]);