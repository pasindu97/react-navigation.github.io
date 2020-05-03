(window.webpackJsonp=window.webpackJsonp||[]).push([[90],{213:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return c})),t.d(n,"metadata",(function(){return o})),t.d(n,"rightToc",(function(){return i})),t.d(n,"default",(function(){return l}));var s=t(1),a=t(9),r=(t(0),t(474)),c={id:"use-focus-effect",title:"useFocusEffect",sidebar_label:"useFocusEffect"},o={id:"version-5.x/use-focus-effect",title:"useFocusEffect",description:"Sometimes we want to run side-effects when a screen is focused. A side effect may involve things like adding an event listener, fetching data, updating document title, etc. While this can be achieved using `focus` and `blur` events, it's not very ergonomic.",source:"@site/versioned_docs/version-5.x/use-focus-effect.md",permalink:"/docs/use-focus-effect",editUrl:"https://github.com/react-navigation/react-navigation.github.io/edit/source/versioned_docs/version-5.x/use-focus-effect.md",version:"5.x",sidebar_label:"useFocusEffect",sidebar:"version-5.x/docs",previous:{title:"useNavigationState",permalink:"/docs/use-navigation-state"},next:{title:"useIsFocused",permalink:"/docs/use-is-focused"}},i=[{value:"Running asynchronous effects",id:"running-asynchronous-effects",children:[]},{value:"Delaying effect until transition finishes",id:"delaying-effect-until-transition-finishes",children:[]},{value:"How is <code>useFocusEffect</code> different from adding a listener for <code>focus</code> event",id:"how-is-usefocuseffect-different-from-adding-a-listener-for-focus-event",children:[]},{value:"Using with class component",id:"using-with-class-component",children:[]}],u={rightToc:i};function l(e){var n=e.components,t=Object(a.a)(e,["components"]);return Object(r.b)("wrapper",Object(s.a)({},u,t,{components:n,mdxType:"MDXLayout"}),Object(r.b)("p",null,"Sometimes we want to run side-effects when a screen is focused. A side effect may involve things like adding an event listener, fetching data, updating document title, etc. While this can be achieved using ",Object(r.b)("inlineCode",{parentName:"p"},"focus")," and ",Object(r.b)("inlineCode",{parentName:"p"},"blur")," events, it's not very ergonomic."),Object(r.b)("p",null,"To make this easier, the library exports a ",Object(r.b)("inlineCode",{parentName:"p"},"useFocusEffect")," hook:"),Object(r.b)("samp",{id:"simple-focus-effect"}),Object(r.b)("pre",null,Object(r.b)("code",Object(s.a)({parentName:"pre"},{className:"language-js"}),"import { useFocusEffect } from '@react-navigation/native';\n\nfunction Profile({ userId }) {\n  const [user, setUser] = React.useState(null);\n\n  useFocusEffect(\n    React.useCallback(() => {\n      const unsubscribe = API.subscribe(userId, user => setUser(user));\n\n      return () => unsubscribe();\n    }, [userId])\n  );\n\n  return <ProfileContent user={user} />;\n}\n")),Object(r.b)("blockquote",null,Object(r.b)("p",{parentName:"blockquote"},"Note: To avoid the running the effect too often, it's important to wrap the callback in ",Object(r.b)("inlineCode",{parentName:"p"},"useCallback")," before passing it to ",Object(r.b)("inlineCode",{parentName:"p"},"useFocusEffect")," as shown in the example.")),Object(r.b)("p",null,"The ",Object(r.b)("inlineCode",{parentName:"p"},"useFocusEffect")," is analogous to React's ",Object(r.b)("inlineCode",{parentName:"p"},"useEffect")," hook. The only difference is that it only runs if the screen is currently focused."),Object(r.b)("p",null,"The effect will run whenever the dependencies passed to ",Object(r.b)("inlineCode",{parentName:"p"},"React.useCallback")," change, i.e. it'll run on initial render (if the screen is focused) as well as on subsequent renders if the dependencies have changed. If you don't wrap your effect in ",Object(r.b)("inlineCode",{parentName:"p"},"React.useCallback"),", the effect will run every render if the screen is focused."),Object(r.b)("p",null,"The cleanup function runs when the previous effect needs to be cleaned up, i.e. when dependencies change and a new effect is scheduled and when the screen unmounts or blurs."),Object(r.b)("h2",{id:"running-asynchronous-effects"},"Running asynchronous effects"),Object(r.b)("p",null,"When running asynchronous effects such as fetching data from server, it's important to make sure that you cancel the request in the cleanup function (similar to ",Object(r.b)("inlineCode",{parentName:"p"},"React.useEffect"),"). If you're using an API that doesn't provide a cancellation mechanism, make sure to ignore the state updates:"),Object(r.b)("pre",null,Object(r.b)("code",Object(s.a)({parentName:"pre"},{className:"language-js"}),"useFocusEffect(\n  React.useCallback(() => {\n    let isActive = true;\n\n    const fetchUser = async () => {\n      try {\n        const user = await API.fetch({ userId });\n\n        if (isActive) {\n          setUser(user);\n        }\n      } catch (e) {\n        // Handle error\n      }\n    };\n\n    fetchUser();\n\n    return () => {\n      isActive = false;\n    };\n  }, [userId])\n);\n")),Object(r.b)("p",null,"If you don't ignore the result, then you might end up with inconsistent data due to race conditions in your API calls."),Object(r.b)("h2",{id:"delaying-effect-until-transition-finishes"},"Delaying effect until transition finishes"),Object(r.b)("p",null,"The ",Object(r.b)("inlineCode",{parentName:"p"},"useFocusEffect")," hook runs the effect as soon as the screen comes into focus. This often means that if there is an animation for the screen change, it might not have finished yet."),Object(r.b)("p",null,"React Navigation runs its animations in native thread, so it's not a problem in many cases. But if the effect updates the UI or renders something expensive, then it can affect the animation performance. In such cases, we can use ",Object(r.b)("a",Object(s.a)({parentName:"p"},{href:"https://reactnative.dev/docs/interactionmanager"}),Object(r.b)("inlineCode",{parentName:"a"},"InteractionManager"))," to defer our work until the animations or gestures have finished:"),Object(r.b)("pre",null,Object(r.b)("code",Object(s.a)({parentName:"pre"},{className:"language-js"}),"useFocusEffect(\n  React.useCallback(() => {\n    const task = InteractionManager.runAfterInteractions(() => {\n      // Expensive task\n    });\n\n    return () => task.cancel();\n  }, [])\n);\n")),Object(r.b)("h2",{id:"how-is-usefocuseffect-different-from-adding-a-listener-for-focus-event"},"How is ",Object(r.b)("inlineCode",{parentName:"h2"},"useFocusEffect")," different from adding a listener for ",Object(r.b)("inlineCode",{parentName:"h2"},"focus")," event"),Object(r.b)("p",null,"The ",Object(r.b)("inlineCode",{parentName:"p"},"focus")," event fires when a screen comes into focus. Since it's an event, your listener won't be called if the screen was already focused when you subscribed to the event. This also doesn't provide a way to perform a cleanup function when the screen becomes unfocused. You can subscribe to the ",Object(r.b)("inlineCode",{parentName:"p"},"blur")," event and handle it manually, but it can get messy. You will usually need to handle ",Object(r.b)("inlineCode",{parentName:"p"},"componentDidMount")," and ",Object(r.b)("inlineCode",{parentName:"p"},"componentWillUnmount")," as well in addition to these events, which complicates it even more."),Object(r.b)("p",null,"The ",Object(r.b)("inlineCode",{parentName:"p"},"useFocusEffect")," allows you to run an effect on focus and clean it up when the screen becomes unfocused. It also handles cleanup on unmount. It re-runs the effect when dependencies change, so you don't need to worry about stale values in your listener."),Object(r.b)("h2",{id:"using-with-class-component"},"Using with class component"),Object(r.b)("p",null,"You can make a component for your effect and use it in your class component:"),Object(r.b)("pre",null,Object(r.b)("code",Object(s.a)({parentName:"pre"},{className:"language-js"}),"function FetchUserData({ userId, onUpdate }) {\n  useFocusEffect(\n    React.useCallback(() => {\n      const unsubscribe = API.subscribe(userId, onUpdate);\n\n      return () => unsubscribe();\n    }, [userId, onUpdate])\n  );\n\n  return null;\n}\n\n// ...\n\nclass Profile extends React.Component {\n  _handleUpdate = user => {\n    // Do something with user object\n  };\n\n  render() {\n    return (\n      <>\n        <FetchUserData\n          userId={this.props.userId}\n          onUpdate={this.handleUpdate}\n        />\n        {/* rest of your code */}\n      </>\n    );\n  }\n}\n")))}l.isMDXComponent=!0},474:function(e,n,t){"use strict";t.d(n,"a",(function(){return f})),t.d(n,"b",(function(){return p}));var s=t(0),a=t.n(s);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function c(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);n&&(s=s.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,s)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?c(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):c(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function i(e,n){if(null==e)return{};var t,s,a=function(e,n){if(null==e)return{};var t,s,a={},r=Object.keys(e);for(s=0;s<r.length;s++)t=r[s],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(s=0;s<r.length;s++)t=r[s],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var u=a.a.createContext({}),l=function(e){var n=a.a.useContext(u),t=n;return e&&(t="function"==typeof e?e(n):o({},n,{},e)),t},f=function(e){var n=l(e.components);return a.a.createElement(u.Provider,{value:n},e.children)},d={inlineCode:"code",wrapper:function(e){var n=e.children;return a.a.createElement(a.a.Fragment,{},n)}},b=Object(s.forwardRef)((function(e,n){var t=e.components,s=e.mdxType,r=e.originalType,c=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),f=l(t),b=s,p=f["".concat(c,".").concat(b)]||f[b]||d[b]||r;return t?a.a.createElement(p,o({ref:n},u,{components:t})):a.a.createElement(p,o({ref:n},u))}));function p(e,n){var t=arguments,s=n&&n.mdxType;if("string"==typeof e||s){var r=t.length,c=new Array(r);c[0]=b;var o={};for(var i in n)hasOwnProperty.call(n,i)&&(o[i]=n[i]);o.originalType=e,o.mdxType="string"==typeof e?e:s,c[1]=o;for(var u=2;u<r;u++)c[u]=t[u];return a.a.createElement.apply(null,c)}return a.a.createElement.apply(null,t)}b.displayName="MDXCreateElement"}}]);