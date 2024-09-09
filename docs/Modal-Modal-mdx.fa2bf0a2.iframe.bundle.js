/*! For license information please see Modal-Modal-mdx.fa2bf0a2.iframe.bundle.js.LICENSE.txt */
(self.webpackChunk_edraj_sveltestrap=self.webpackChunk_edraj_sveltestrap||[]).push([[9452],{7074:function(n,o,e){"use strict";e.d(o,{BN:function(){return l},RP:function(){return r},gz:function(){return a},xA:function(){return s}});var t=e(6540);const l=t.createContext({});function a(n){return function(o){const e=r(o.components);return t.createElement(n,{...o,allComponents:e})}}function r(n){const o=t.useContext(l);return t.useMemo((()=>"function"==typeof n?n(o):{...o,...n}),[o,n])}const d={};function s({components:n,children:o,disableParentContext:e}){let a;return a=e?"function"==typeof n?n({}):n||d:r(n),t.createElement(l.Provider,{value:a},o)}},3403:function(n,o,e){"use strict";e.r(o),e(6540);var t=e(4848),l=e(7074),a=e(4457),r=e(6472);function d(n){const o=Object.assign({h1:"h1",a:"a",p:"p",code:"code",h2:"h2"},(0,l.RP)(),n.components);return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(a.W8,{title:"Components/Modal"}),"\n",(0,t.jsxs)(o.h1,{id:"modal-bootstrap-modal",children:["Modal ",(0,t.jsx)("small",{class:"bootstrap-docs",children:(0,t.jsx)(o.a,{href:"https://getbootstrap.com/docs/5.3/components/modal/",target:"_blank",rel:"nofollow noopener noreferrer",children:"Bootstrap Modal"})})]}),"\n",(0,t.jsxs)(o.p,{children:["The ",(0,t.jsx)(o.code,{children:"<Modal>"})," component is a user interface element that adds dialogs for lightboxes, user notifications, or completely custom content."]}),"\n",(0,t.jsx)(a.Hl,{children:(0,t.jsx)(a.gG,{of:r.Basic})}),"\n",(0,t.jsx)(a.H2,{of:r.Basic}),"\n",(0,t.jsx)(o.h2,{id:"shorthand",children:"Shorthand"}),"\n",(0,t.jsx)(a.Hl,{withSource:"none",children:(0,t.jsx)(a.gG,{of:r.Shorthand})}),"\n",(0,t.jsx)(a.kL,{dark:!0,language:"html",code:'\n<script lang="ts">\n  import { Button, Modal } from \'@sveltestrap/sveltestrap\';\n  let open = false;\n  const toggle = () => (open = !open);\n<\/script>\n\n<div>\n  <Button color="danger" on:click={toggle}>Open Modal</Button>\n  <Modal body header="Modal title" isOpen={open} {toggle}>\n    Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod\n    tempor incididunt ut labore et dolore magna aliqua.\n  </Modal>\n</div>\n'}),"\n",(0,t.jsx)(o.h2,{id:"sizes",children:"Sizes"}),"\n",(0,t.jsx)(a.Hl,{withSource:"none",children:(0,t.jsx)(a.gG,{of:r.Sizes})}),"\n",(0,t.jsx)(a.kL,{dark:!0,language:"html",code:'\n<script lang="ts">\n  import { \n    Button,\n    ButtonGroup,\n    Modal,\n    ModalBody,\n    ModalFooter,\n    ModalHeader\n  } from \'@sveltestrap/sveltestrap\';\n  let open = false;\n  let size: any;\n  const toggle = () => {\n    size = undefined;\n    open = !open;\n  };\n  const toggleLg = () => {\n    size = \'lg\';\n    open = !open;\n  };\n  const toggleSm = () => {\n    size = \'sm\';\n    open = !open;\n  };\n  const toggleXl = () => {\n    size = \'xl\';\n    open = !open;\n  };\n<\/script>\n\n<div>\n  <ButtonGroup>\n    <Button color="success" on:click={toggleSm}>Open Small Modal</Button>\n    <Button color="warning" on:click={toggle}>Open Default Modal</Button>\n    <Button color="danger" on:click={toggleLg}>Open Large Modal</Button>\n    <Button color="dark" on:click={toggleXl}>Open Extra Large Modal</Button>\n  </ButtonGroup>\n\n  <Modal isOpen={open} {toggle} {size}>\n    <ModalHeader {toggle}>Modal title</ModalHeader>\n    <ModalBody>\n      Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod\n      tempor incididunt ut labore et dolore magna aliqua.\n    </ModalBody>\n    <ModalFooter>\n      <Button color="primary" on:click={toggle}>Do Something</Button>\n      <Button color="secondary" on:click={toggle}>Cancel</Button>\n    </ModalFooter>\n  </Modal>\n</div>\n'}),"\n",(0,t.jsx)(o.h2,{id:"fullscreen",children:"Fullscreen"}),"\n",(0,t.jsx)(a.Hl,{withSource:"none",children:(0,t.jsx)(a.gG,{of:r.Fullscreen})}),"\n",(0,t.jsx)(a.kL,{dark:!0,language:"html",code:'\n<script lang="ts">\n  import { \n    Button,\n    ButtonGroup,\n    Modal,\n    ModalBody,\n    ModalFooter,\n    ModalHeader \n  } from \'@sveltestrap/sveltestrap\';\n  let open = false;\n  let fullscreen: any;\n  const toggle = () => {\n    fullscreen = undefined;\n    open = !open;\n  };\n  const toggleAlways = () => {\n    fullscreen = true;\n    open = !open;\n  };\n<\/script>\n\n<Button color="primary" on:click={toggleAlways}>\n  Open Always Modal\n</Button>\n\n<Modal isOpen={open} {toggle} {fullscreen}>\n  <ModalHeader {toggle}>Modal title</ModalHeader>\n    <ModalBody>\n      Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod\n      tempor incididunt ut labore et dolore magna aliqua.\n    </ModalBody>\n    <ModalFooter>\n      <Button color="primary" on:click={toggle}>Do Something</Button>\n      <Button color="secondary" on:click={toggle}>Cancel</Button>\n    </ModalFooter>\n  </Modal>\n'}),"\n",(0,t.jsx)(o.h2,{id:"scrolling",children:"Scrolling"}),"\n",(0,t.jsx)(a.Hl,{withSource:"none",children:(0,t.jsx)(a.gG,{of:r.Scrolling})}),"\n",(0,t.jsx)(a.kL,{dark:!0,language:"html",code:'\n<script lang="ts">\n  import { \n    Button,\n    ButtonGroup,\n    Modal,\n    ModalBody,\n    ModalFooter,\n    ModalHeader \n  } from \'@sveltestrap/sveltestrap\';\n  let open = false;\n  let openScrollable = false;\n  const toggle = () => (open = !open);\n  const toggleScrollable = () => (openScrollable = !openScrollable);\n<\/script>\n\n<div>\n  <Button color="primary" on:click={toggle}>Default scrolling</Button>\n  <Button color="success" on:click={toggleScrollable}\n    >Scrollable modal body</Button\n  >\n  <Modal isOpen={open} {toggle}>\n    <ModalHeader {toggle}>Modal title</ModalHeader>\n    <ModalBody>\n      <p style="min-height: 1000px;">\n        This is some placeholder content to show the scrolling behavior for\n        modals. Instead of repeating the text the modal, we use an inline style\n        set a minimum height, thereby extending the length of the overall modal\n        and demonstrating the overflow scrolling. When content becomes longer\n        than the height of the viewport, scrolling will move the modal as\n        needed.\n      </p>\n    </ModalBody>\n    <ModalFooter>\n      <Button color="primary" on:click={toggle}>Do Something</Button>\n      <Button color="secondary" on:click={toggle}>Cancel</Button>\n    </ModalFooter>\n  </Modal>\n\n  <Modal isOpen={openScrollable} toggle={toggleScrollable} scrollable>\n    <ModalHeader toggle={toggleScrollable}>Modal title</ModalHeader>\n    <ModalBody>\n      <p style="min-height: 1000px;">\n        This is some placeholder content to show the scrolling behavior for\n        modals. Instead of repeating the text the modal, we use an inline style\n        set a minimum height, thereby extending the length of the overall modal\n        and demonstrating the overflow scrolling. When content becomes longer\n        than the height of the viewport, scrolling will move the modal as\n        needed.\n      </p>\n    </ModalBody>\n    <ModalFooter>\n      <Button color="primary" on:click={toggleScrollable}>Do Something</Button>\n      <Button color="secondary" on:click={toggleScrollable}>Cancel</Button>\n    </ModalFooter>\n  </Modal>\n</div>\n\n'}),"\n",(0,t.jsx)(o.h2,{id:"backdrop",children:"Backdrop"}),"\n",(0,t.jsx)(a.Hl,{withSource:"none",children:(0,t.jsx)(a.gG,{of:r.Backdrop})}),"\n",(0,t.jsx)(a.kL,{dark:!0,language:"html",code:'\n<script lang="ts">\n  import { \n    Button,\n    ButtonGroup,\n    Modal,\n    ModalBody,\n    ModalFooter,\n    ModalHeader \n  } from \'@sveltestrap/sveltestrap\';\n  let open = false;\n  const toggle = () => (open = !open);\n<\/script>\n\n<div>\n  <Button color="danger" on:click={toggle}>Modal with no Backdrop</Button>\n  <Modal isOpen={open} backdrop={false} {toggle}>\n    <ModalHeader {toggle}>Modal title</ModalHeader>\n    <ModalBody>\n      Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod\n      tempor incididunt ut labore et dolore magna aliqua.\n    </ModalBody>\n    <ModalFooter>\n      <Button color="primary" on:click={toggle}>Do Something</Button>\n      <Button color="secondary" on:click={toggle}>Cancel</Button>\n    </ModalFooter>\n  </Modal>\n</div>\n'}),"\n",(0,t.jsx)(o.h2,{id:"static-backdrop",children:"Static Backdrop"}),"\n",(0,t.jsx)(a.Hl,{withSource:"none",children:(0,t.jsx)(a.gG,{of:r.StaticBackdrop})}),"\n",(0,t.jsx)(a.kL,{dark:!0,language:"html",code:'\n<script lang="ts">\n  import { \n    Button,\n    ButtonGroup,\n    Modal,\n    ModalBody,\n    ModalFooter,\n    ModalHeader \n  } from \'@sveltestrap/sveltestrap\';\n  let open = false;\n  const toggle = () => (open = !open);\n<\/script>\n\n<div>\n  <Button color="danger" on:click={toggle}>Modal with Static Backdrop</Button>\n  <Modal isOpen={open} backdrop="static" {toggle}>\n    <ModalHeader {toggle}>Modal title</ModalHeader>\n    <ModalBody>\n      Clicking outside modal or hitting Escape does not dismiss.\n    </ModalBody>\n    <ModalFooter>\n      <Button color="primary" on:click={toggle}>Do Something</Button>\n      <Button color="secondary" on:click={toggle}>Cancel</Button>\n    </ModalFooter>\n  </Modal>\n</div>\n'}),"\n",(0,t.jsx)(o.h2,{id:"fade",children:"Fade"}),"\n",(0,t.jsx)(a.Hl,{withSource:"none",children:(0,t.jsx)(a.gG,{of:r.Fade})}),"\n",(0,t.jsx)(a.kL,{dark:!0,language:"html",code:'\n<script lang="ts">\n  import { \n    Button,\n    ButtonGroup,\n    Modal,\n    ModalBody,\n    ModalFooter,\n    ModalHeader \n  } from \'@sveltestrap/sveltestrap\';\n  let open = false;\n  const toggle = () => (open = !open);\n<\/script>\n\n<div>\n  <Button color="danger" on:click={toggle}>Modal with no Fade</Button>\n  <Modal isOpen={open} fade={false} {toggle}>\n    <ModalHeader {toggle}>Modal title</ModalHeader>\n    <ModalBody>\n      Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod\n      tempor incididunt ut labore et dolore magna aliqua.\n    </ModalBody>\n    <ModalFooter>\n      <Button color="primary" on:click={toggle}>Do Something</Button>\n      <Button color="secondary" on:click={toggle}>Cancel</Button>\n    </ModalFooter>\n  </Modal>\n</div>\n'}),"\n",(0,t.jsx)(o.h2,{id:"events",children:"Events"}),"\n",(0,t.jsx)(a.Hl,{withSource:"none",children:(0,t.jsx)(a.gG,{of:r.Events})}),"\n",(0,t.jsx)(a.kL,{dark:!0,language:"html",code:"\n<script lang=\"ts\">\n  import { Button, Modal } from '@sveltestrap/sveltestrap';\n  let open = false;\n  let status = 'Closed';\n  const toggle = () => (open = !open);\n<\/script>\n\n<div>\n  <h5>Current state: {status}</h5>\n  <Button color=\"danger\" on:click={toggle}>Open Modal</Button>\n  <Modal\n    body\n    header=\"Modal title\"\n    isOpen={open}\n    {toggle}\n    on:opening={() => (status = 'Opening...')}\n    on:open={() => (status = 'Opened')}\n    on:closing={() => (status = 'Closing...')}\n    on:close={() => (status = 'Closed')}\n  >\n    Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod\n    tempor incididunt ut labore et dolore magna aliqua.\n  </Modal>\n</div>\n"}),"\n",(0,t.jsx)(o.h2,{id:"static",children:"Static"}),"\n",(0,t.jsx)(a.Hl,{withSource:"none",children:(0,t.jsx)(a.gG,{of:r.Static})}),"\n",(0,t.jsx)(a.kL,{dark:!0,language:"html",code:"\n<script lang=\"ts\">\n  import { Modal, ModalBody, ModalHeader } from '@sveltestrap/sveltestrap';\n<\/script>\n\n<div>\n  <Modal static isOpen>\n    <ModalHeader>Static Modal</ModalHeader>\n    <ModalBody>\n      Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore\n      magna aliqua.\n    </ModalBody>\n  </Modal>\n</div>\n"}),"\n",(0,t.jsx)(o.h2,{id:"external-content",children:"External Content"}),"\n",(0,t.jsx)(a.Hl,{withSource:"none",children:(0,t.jsx)(a.gG,{of:r.ExternalContent})}),"\n",(0,t.jsx)(a.kL,{dark:!0,language:"html",code:'\n<script lang="ts">\n  import { Button, Icon, Modal } from \'@sveltestrap/sveltestrap\';\n  let open = false;\n  const toggle = () => (open = !open);\n<\/script>\n\n<div>\n  <Button color="danger" on:click={toggle}>Open Modal</Button>\n  <Modal isOpen={open} {toggle} body>\n    <div slot="external" class="text-end">\n      <Button color="link" class="text-white" size="lg" on:click={toggle}>\n        <Icon name="x" class="h1" />\n      </Button>\n    </div>\n    <h4>You can add content outside the Modal.</h4>\n    <p>Click the X on right to close.</p>\n  </Modal>\n</div>\n'})]})}o.default=function(n={}){const{wrapper:o}=Object.assign({},(0,l.RP)(),n.components);return o?(0,t.jsx)(o,Object.assign({},n,{children:(0,t.jsx)(d,n)})):d(n)}},2433:function(n){function o(n){var o=new Error("Cannot find module '"+n+"'");throw o.code="MODULE_NOT_FOUND",o}o.keys=function(){return[]},o.resolve=o,o.id=2433,n.exports=o},1020:function(n,o,e){"use strict";var t=e(6540),l=Symbol.for("react.element"),a=Symbol.for("react.fragment"),r=Object.prototype.hasOwnProperty,d=t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,s={key:!0,ref:!0,__self:!0,__source:!0};function i(n,o,e){var t,a={},i=null,c=null;for(t in void 0!==e&&(i=""+e),void 0!==o.key&&(i=""+o.key),void 0!==o.ref&&(c=o.ref),o)r.call(o,t)&&!s.hasOwnProperty(t)&&(a[t]=o[t]);if(n&&n.defaultProps)for(t in o=n.defaultProps)void 0===a[t]&&(a[t]=o[t]);return{$$typeof:l,type:n,key:i,ref:c,props:a,_owner:d.current}}o.Fragment=a,o.jsx=i,o.jsxs=i},4848:function(n,o,e){"use strict";n.exports=e(1020)}}]);