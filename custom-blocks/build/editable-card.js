!function(){"use strict";var e=window.React,t=window.wp.blocks,c=window.wp.i18n,a=window.wp.blockEditor;(0,t.registerBlockType)("custom-blocks/editable-card",{title:(0,c.__)("Editable Card","custom-blocks"),category:"custom-blocks",attributes:{heading:{type:"string"},quote:{type:"string"},source:{type:"string"}},icon:"index-card",edit:function(t){return(0,e.createElement)("div",{className:"card"},(0,e.createElement)("div",{className:"card-header"},(0,e.createElement)(a.RichText,{value:t.attributes.heading,onChange:function(e){t.setAttributes({heading:e})},placeholder:(0,c.__)("Card Heading","custom-blocks")})),(0,e.createElement)("div",{className:"card-body"},(0,e.createElement)("blockquote",{className:"blockquote mb-0"},(0,e.createElement)(a.RichText,{value:t.attributes.quote,onChange:function(e){t.setAttributes({quote:e})},placeholder:(0,c.__)("Card Citation","custom-blocks")}),(0,e.createElement)("footer",{className:"blockquote-footer"},(0,e.createElement)("cite",{title:"Source Title"},(0,e.createElement)(a.RichText,{value:t.attributes.source,onChange:function(e){t.setAttributes({source:e})},placeholder:(0,c.__)("Enter source here","custom-blocks")}))))))},save:function(t){return(0,e.createElement)("div",{className:"card"},(0,e.createElement)("div",{className:"card-header"},(0,e.createElement)(a.RichText.Content,{value:t.attributes.heading})),(0,e.createElement)("div",{className:"card-body"},(0,e.createElement)("blockquote",{className:"blockquote mb-0"},(0,e.createElement)(a.RichText.Content,{value:t.attributes.quote}),(0,e.createElement)("footer",{className:"blockquote-footer"},(0,e.createElement)("cite",{title:"Source Title"},(0,e.createElement)(a.RichText.Content,{value:t.attributes.source}))))))}})}();