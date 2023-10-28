!function(){"use strict";var e=window.React,t=window.wp.blocks,o=window.wp.i18n,r=window.wp.blockEditor,c=window.wp.components;(0,t.registerBlockType)("custom-blocks/coloured-card",{title:(0,o.__)("Coloured Card","custom-blocks"),category:"custom-blocks",icon:"index-card",attributes:{heading:{type:"string"},quote:{type:"string"},source:{type:"string"},showHeader:{type:"boolean",default:!0},color:{type:"string"}},edit:function(t){return(0,e.createElement)(e.Fragment,null,(0,e.createElement)(r.BlockControls,null,(0,e.createElement)(c.ToolbarGroup,null,(0,e.createElement)(c.ToolbarButton,{isPressed:!0===t.attributes.showHeader,onClick:()=>t.setAttributes({showHeader:!t.attributes.showHeader})},(0,o.__)("Header","custom-blocks")))),(0,e.createElement)(r.InspectorControls,null,(0,e.createElement)(r.PanelColorSettings,{title:(0,o.__)("Color Settings","custom-blocks"),colorSettings:[{value:t.attributes.color,onChange:function(e){t.setAttributes({color:e})},label:(0,o.__)("Header Color","custom-blocks")}]})),(0,e.createElement)("div",{className:"card"},t.attributes.showHeader&&(0,e.createElement)("div",{className:"card-header",style:{backgroundColor:t.attributes.color}},(0,e.createElement)(r.RichText,{value:t.attributes.heading,onChange:function(e){t.setAttributes({heading:e})},placeholder:(0,o.__)("Card Heading","custom-blocks")})),(0,e.createElement)("div",{className:"card-body"},(0,e.createElement)("blockquote",{className:"blockquote mb-0"},(0,e.createElement)(r.RichText,{value:t.attributes.quote,onChange:function(e){t.setAttributes({quote:e})},placeholder:(0,o.__)("Card Citation","custom-blocks")}),(0,e.createElement)("footer",{className:"blockquote-footer"},(0,e.createElement)("cite",{title:"Source Title"},(0,e.createElement)(r.RichText,{value:t.attributes.source,onChange:function(e){t.setAttributes({source:e})},placeholder:(0,o.__)("Enter source here","custom-blocks")})))))))},save:function(t){return(0,e.createElement)("div",{className:"card"},(0,e.createElement)("div",{className:"card-header",style:{backgroundColor:t.attributes.color}},(0,e.createElement)(r.RichText.Content,{value:t.attributes.heading})),(0,e.createElement)("div",{className:"card-body"},(0,e.createElement)("blockquote",{className:"blockquote mb-0"},(0,e.createElement)(r.RichText.Content,{value:t.attributes.quote}),(0,e.createElement)("footer",{className:"blockquote-footer"},(0,e.createElement)("cite",{title:"Source Title"},(0,e.createElement)(r.RichText.Content,{value:t.attributes.source}))))))}})}();