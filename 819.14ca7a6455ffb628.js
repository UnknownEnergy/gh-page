"use strict";(self.webpackChunkchatgpt_api=self.webpackChunkchatgpt_api||[]).push([[819,889],{70889:(I,K,c)=>{c.r(K),c.d(K,{MapReduceDocumentsChain:()=>y,RefineDocumentsChain:()=>d,StuffDocumentsChain:()=>_});var a=c(15861),h=c(1562),p=c(40443),w=c(194);class _ extends h.l{get inputKeys(){return[this.inputKey,...this.llmChain.inputKeys]}constructor(e){super(),Object.defineProperty(this,"llmChain",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"inputKey",{enumerable:!0,configurable:!0,writable:!0,value:"input_documents"}),Object.defineProperty(this,"outputKey",{enumerable:!0,configurable:!0,writable:!0,value:"output_text"}),Object.defineProperty(this,"documentVariableName",{enumerable:!0,configurable:!0,writable:!0,value:"context"}),this.llmChain=e.llmChain,this.documentVariableName=e.documentVariableName??this.documentVariableName,this.inputKey=e.inputKey??this.inputKey,this.outputKey=e.outputKey??this.outputKey}_call(e){var t=this;return(0,a.Z)(function*(){if(!(t.inputKey in e))throw new Error(`Document key ${t.inputKey} not found.`);const{[t.inputKey]:n,...u}=e,s=n.map(({pageContent:r})=>r).join("\n\n");return yield t.llmChain.call({...u,[t.documentVariableName]:s})})()}_chainType(){return"stuff_documents_chain"}static deserialize(e){return(0,a.Z)(function*(){if(!e.llm_chain)throw new Error("Missing llm_chain");return new _({llmChain:yield p.LLMChain.deserialize(e.llm_chain)})})()}serialize(){return{_type:this._chainType(),llm_chain:this.llmChain.serialize()}}}class y extends h.l{get inputKeys(){return[this.inputKey,...this.combineDocumentChain.inputKeys]}constructor(e){super(),Object.defineProperty(this,"llmChain",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"inputKey",{enumerable:!0,configurable:!0,writable:!0,value:"input_documents"}),Object.defineProperty(this,"outputKey",{enumerable:!0,configurable:!0,writable:!0,value:"output_text"}),Object.defineProperty(this,"documentVariableName",{enumerable:!0,configurable:!0,writable:!0,value:"context"}),Object.defineProperty(this,"maxTokens",{enumerable:!0,configurable:!0,writable:!0,value:3e3}),Object.defineProperty(this,"maxIterations",{enumerable:!0,configurable:!0,writable:!0,value:10}),Object.defineProperty(this,"ensureMapStep",{enumerable:!0,configurable:!0,writable:!0,value:!1}),Object.defineProperty(this,"combineDocumentChain",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),this.llmChain=e.llmChain,this.combineDocumentChain=e.combineDocumentChain,this.documentVariableName=e.documentVariableName??this.documentVariableName,this.ensureMapStep=e.ensureMapStep??this.ensureMapStep,this.inputKey=e.inputKey??this.inputKey,this.outputKey=e.outputKey??this.outputKey,this.maxTokens=e.maxTokens??this.maxTokens,this.maxIterations=e.maxIterations??this.maxIterations}_call(e){var t=this;return(0,a.Z)(function*(){if(!(t.inputKey in e))throw new Error(`Document key ${t.inputKey} not found.`);const{[t.inputKey]:n,...u}=e;let i=n;for(let r=0;r<t.maxIterations;r+=1){const m=i.map(l=>({[t.documentVariableName]:l.pageContent,...u})),g=m.map(function(){var l=(0,a.Z)(function*(b){const C=yield t.llmChain.prompt.format(b);return t.llmChain.llm.getNumTokens(C)});return function(b){return l.apply(this,arguments)}}()),f=yield Promise.all(g).then(l=>l.reduce((b,C)=>b+C,0));if((0!==r||!t.ensureMapStep)&&f<t.maxTokens)break;const v=yield t.llmChain.apply(m),{outputKey:L}=t.llmChain;i=v.map(l=>({pageContent:l[L]}))}const s={input_documents:i,...u};return yield t.combineDocumentChain.call(s)})()}_chainType(){return"map_reduce_documents_chain"}static deserialize(e){return(0,a.Z)(function*(){if(!e.llm_chain)throw new Error("Missing llm_chain");if(!e.combine_document_chain)throw new Error("Missing combine_document_chain");return new y({llmChain:yield p.LLMChain.deserialize(e.llm_chain),combineDocumentChain:yield h.l.deserialize(e.combine_document_chain)})})()}serialize(){return{_type:this._chainType(),llm_chain:this.llmChain.serialize(),combine_document_chain:this.combineDocumentChain.serialize()}}}class d extends h.l{get defaultDocumentPrompt(){return new w.PromptTemplate({inputVariables:["page_content"],template:"{page_content}"})}get inputKeys(){return[this.inputKey,...this.refineLLMChain.inputKeys]}constructor(e){super(),Object.defineProperty(this,"llmChain",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"inputKey",{enumerable:!0,configurable:!0,writable:!0,value:"input_documents"}),Object.defineProperty(this,"outputKey",{enumerable:!0,configurable:!0,writable:!0,value:"output_text"}),Object.defineProperty(this,"documentVariableName",{enumerable:!0,configurable:!0,writable:!0,value:"context"}),Object.defineProperty(this,"initialResponseName",{enumerable:!0,configurable:!0,writable:!0,value:"existing_answer"}),Object.defineProperty(this,"refineLLMChain",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"documentPrompt",{enumerable:!0,configurable:!0,writable:!0,value:this.defaultDocumentPrompt}),this.llmChain=e.llmChain,this.refineLLMChain=e.refineLLMChain,this.documentVariableName=e.documentVariableName??this.documentVariableName,this.inputKey=e.inputKey??this.inputKey,this.documentPrompt=e.documentPrompt??this.documentPrompt,this.initialResponseName=e.initialResponseName??this.initialResponseName}_constructInitialInputs(e,t){var n=this;return(0,a.Z)(function*(){const u={page_content:e.pageContent,...e.metadata},i={};return n.documentPrompt.inputVariables.forEach(r=>{i[r]=u[r]}),{[n.documentVariableName]:yield n.documentPrompt.format({...i}),...t}})()}_constructRefineInputs(e,t){var n=this;return(0,a.Z)(function*(){const u={page_content:e.pageContent,...e.metadata},i={};n.documentPrompt.inputVariables.forEach(r=>{i[r]=u[r]});const s={[n.documentVariableName]:yield n.documentPrompt.format({...i})};return{[n.initialResponseName]:t,...s}})()}_call(e){var t=this;return(0,a.Z)(function*(){if(!(t.inputKey in e))throw new Error(`Document key ${t.inputKey} not found.`);const{[t.inputKey]:n,...u}=e,i=n,s=yield t._constructInitialInputs(i[0],u);let o=yield t.llmChain.predict({...s});const r=[o];for(let m=1;m<i.length;m+=1){const f={...yield t._constructRefineInputs(i[m],o),...u};o=yield t.refineLLMChain.predict({...f}),r.push(o)}return{[t.outputKey]:o}})()}_chainType(){return"refine_documents_chain"}static deserialize(e){return(0,a.Z)(function*(){const t=e.llm_chain;if(!t)throw new Error("Missing llm_chain");const n=e.refine_llm_chain;if(!n)throw new Error("Missing refine_llm_chain");return new d({llmChain:yield p.LLMChain.deserialize(t),refineLLMChain:yield p.LLMChain.deserialize(n)})})()}serialize(){return{_type:this._chainType(),llm_chain:this.llmChain.serialize(),refine_llm_chain:this.refineLLMChain.serialize()}}}}}]);