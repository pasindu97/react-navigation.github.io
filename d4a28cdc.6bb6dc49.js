(window.webpackJsonp=window.webpackJsonp||[]).push([[289],{414:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return c})),n.d(t,"rightToc",(function(){return p})),n.d(t,"default",(function(){return l}));var a=n(1),o=n(9),r=(n(0),n(477)),i={id:"typescript",title:"Type checking with TypeScript",sidebar_label:"Type checking with TypeScript"},c={id:"version-5.x/typescript",title:"Type checking with TypeScript",description:"React Navigation is written with TypeScript and exports type definitions for TypeScript projects.",source:"@site/versioned_docs/version-5.x/typescript.md",permalink:"/docs/typescript",editUrl:"https://github.com/react-navigation/react-navigation.github.io/edit/source/versioned_docs/version-5.x/typescript.md",version:"5.x",sidebar_label:"Type checking with TypeScript",sidebar:"version-5.x/docs",previous:{title:"State persistence",permalink:"/docs/state-persistence"},next:{title:"Redux integration",permalink:"/docs/redux-integration"}},p=[{value:"Type checking the navigator",id:"type-checking-the-navigator",children:[]},{value:"Type checking screens",id:"type-checking-screens",children:[]},{value:"Nesting navigators",id:"nesting-navigators",children:[]},{value:"Annotating <code>useNavigation</code>",id:"annotating-usenavigation",children:[]},{value:"Annotating <code>useRoute</code>",id:"annotating-useroute",children:[]}],s={rightToc:p};function l(e){var t=e.components,n=Object(o.a)(e,["components"]);return Object(r.b)("wrapper",Object(a.a)({},s,n,{components:t,mdxType:"MDXLayout"}),Object(r.b)("p",null,"React Navigation is written with TypeScript and exports type definitions for TypeScript projects."),Object(r.b)("h3",{id:"type-checking-the-navigator"},"Type checking the navigator"),Object(r.b)("p",null,"To type check our route name and params, the first thing we need to do is to create an object type with mappings for route name to the params of the route. For example, say we have a route called ",Object(r.b)("inlineCode",{parentName:"p"},"Profile")," in our root navigator which should have a param ",Object(r.b)("inlineCode",{parentName:"p"},"userId"),":"),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-tsx"}),"type RootStackParamList = {\n  Profile: { userId: string };\n};\n")),Object(r.b)("p",null,"Similarly, we need to do the same for each route:"),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-tsx"}),"type RootStackParamList = {\n  Home: undefined;\n  Profile: { userId: string };\n  Feed: { sort: 'latest' | 'top' } | undefined;\n};\n")),Object(r.b)("p",null,"Specifying ",Object(r.b)("inlineCode",{parentName:"p"},"undefined")," means that the route doesn't have params. An union type with ",Object(r.b)("inlineCode",{parentName:"p"},"undefined")," (",Object(r.b)("inlineCode",{parentName:"p"},"SomeType | undefined"),") means that params are optional."),Object(r.b)("p",null,"After we have defined the mappings, we need to tell our navigator to use it. To do that, we can pass it as a generic to the ",Object(r.b)("inlineCode",{parentName:"p"},"createXNavigator")," functions:"),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-tsx"}),"import { createStackNavigator } from '@react-navigation/stack';\n\nconst RootStack = createStackNavigator<RootStackParamList>();\n")),Object(r.b)("p",null,"And then we can use it:"),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-tsx"}),'<RootStack.Navigator initialRouteName="Home">\n  <RootStack.Screen name="Home" component={Home} />\n  <RootStack.Screen\n    name="Profile"\n    component={Profile}\n    initialParams={{ userId: user.id }}\n  />\n  <RootStack.Screen name="Feed" component={Feed} />\n</RootStack.Navigator>\n')),Object(r.b)("p",null,"This will provide type checking and intelliSense for props of the ",Object(r.b)("inlineCode",{parentName:"p"},"Navigator")," and ",Object(r.b)("inlineCode",{parentName:"p"},"Screen")," components."),Object(r.b)("h3",{id:"type-checking-screens"},"Type checking screens"),Object(r.b)("p",null,"To type check our screens, we need to annotate the ",Object(r.b)("inlineCode",{parentName:"p"},"navigation")," prop and the ",Object(r.b)("inlineCode",{parentName:"p"},"route")," prop received by a screen."),Object(r.b)("p",null,"To annotate the ",Object(r.b)("inlineCode",{parentName:"p"},"navigation")," prop, we need to import the corresponding type from the navigator. For example, ",Object(r.b)("inlineCode",{parentName:"p"},"StackNavigationProp")," for ",Object(r.b)("inlineCode",{parentName:"p"},"@react-navigation/stack"),":"),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-tsx"}),"import { StackNavigationProp } from '@react-navigation/stack';\n\ntype ProfileScreenNavigationProp = StackNavigationProp<\n  RootStackParamList,\n  'Profile'\n>;\n\ntype Props = {\n  navigation: ProfileScreenNavigationProp;\n};\n")),Object(r.b)("p",null,"The type for the navigation prop takes 2 generics, the param list object we defined earlier, and the name of the current route. This allows us to type check route names and params which you're navigating using ",Object(r.b)("inlineCode",{parentName:"p"},"navigate"),", ",Object(r.b)("inlineCode",{parentName:"p"},"push")," etc. The name of the current route is necessary to type check the params when you call ",Object(r.b)("inlineCode",{parentName:"p"},"setParams"),"."),Object(r.b)("p",null,"To annotate the ",Object(r.b)("inlineCode",{parentName:"p"},"route")," prop, we need to use the ",Object(r.b)("inlineCode",{parentName:"p"},"RouteProp")," type from ",Object(r.b)("inlineCode",{parentName:"p"},"@react-navigation/native"),":"),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-tsx"}),"import { RouteProp } from '@react-navigation/native';\n\ntype ProfileScreenRouteProp = RouteProp<RootStackParamList, 'Profile'>;\n\ntype Props = {\n  route: ProfileScreenRouteProp;\n};\n")),Object(r.b)("p",null,"This allows us to type check the route object, such as ",Object(r.b)("inlineCode",{parentName:"p"},"route.params"),"."),Object(r.b)("p",null,"To summarize:"),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-tsx"}),"import { RouteProp } from '@react-navigation/native';\nimport { StackNavigationProp } from '@react-navigation/stack';\n\ntype RootStackParamList = {\n  Home: undefined;\n  Profile: { userId: string };\n  Feed: { sort: 'latest' | 'top' } | undefined;\n};\n\ntype ProfileScreenRouteProp = RouteProp<RootStackParamList, 'Profile'>;\n\ntype ProfileScreenNavigationProp = StackNavigationProp<\n  RootStackParamList,\n  'Profile'\n>;\n\ntype Props = {\n  route: ProfileScreenRouteProp;\n  navigation: ProfileScreenNavigationProp;\n};\n")),Object(r.b)("p",null,"Alternatively, you can also import a generic type to define types for both the ",Object(r.b)("inlineCode",{parentName:"p"},"navigation")," and ",Object(r.b)("inlineCode",{parentName:"p"},"route")," props from the corresponding navigator:"),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-tsx"}),"import { StackScreenProps } from '@react-navigation/stack';\n\ntype RootStackParamList = {\n  Home: undefined;\n  Profile: { userId: string };\n  Feed: { sort: 'latest' | 'top' } | undefined;\n};\n\ntype Props = StackScreenProps<RootStackParamList, 'Profile'>;\n")),Object(r.b)("p",null,"Then you can use the ",Object(r.b)("inlineCode",{parentName:"p"},"Props")," type to annotate your component."),Object(r.b)("p",null,"For function components:"),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-tsx"}),"function ProfileScreen({ route, navigation }: Props) {\n  // ...\n}\n")),Object(r.b)("p",null,"For class components:"),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-ts"}),"class ProfileScreen extends React.Component<Props> {\n  render() {\n    // ...\n  }\n}\n")),Object(r.b)("p",null,"We recommend creating a separate ",Object(r.b)("inlineCode",{parentName:"p"},"types.tsx")," file where you keep the types and import them in your component files instead of repeating them in each file."),Object(r.b)("h3",{id:"nesting-navigators"},"Nesting navigators"),Object(r.b)("p",null,"When we nest navigators, the navigation prop of the screen is a combination of multiple navigation props. For example, if we have a tab inside a stack, the ",Object(r.b)("inlineCode",{parentName:"p"},"navigation")," prop will have both ",Object(r.b)("inlineCode",{parentName:"p"},"jumpTo")," (from the tab navigator) and ",Object(r.b)("inlineCode",{parentName:"p"},"push")," (from the stack navigator). To make it easier to combine types from multiple navigator, you can use the ",Object(r.b)("inlineCode",{parentName:"p"},"CompositeNavigationProp")," type:"),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-ts"}),"import { CompositeNavigationProp } from '@react-navigation/native';\nimport { BottomTabNavigationProp } from '@react-navigation/bottom-tabs';\nimport { StackNavigationProp } from '@react-navigation/stack';\n\ntype ProfileScreenNavigationProp = CompositeNavigationProp<\n  BottomTabNavigationProp<TabParamList, 'Profile'>,\n  StackNavigationProp<StackParamList>\n>;\n")),Object(r.b)("p",null,"The ",Object(r.b)("inlineCode",{parentName:"p"},"CompositeNavigationProp")," type takes 2 parameters, first parameter is the primary navigation type (type for the navigator that owns this screen, in our case the tab navigator which contains the ",Object(r.b)("inlineCode",{parentName:"p"},"Profile")," screen) and second parameter is the secondary navigation type (type for a parent navigator). The primary navigation type should always have the screen's route name as it's second parameter."),Object(r.b)("p",null,"For multiple parent navigators, this secondary type should be nested:"),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-ts"}),"type ProfileScreenNavigationProp = CompositeNavigationProp<\n  BottomTabNavigationProp<TabParamList, 'Profile'>,\n  CompositeNavigationProp<\n    StackNavigationProp<StackParamList>,\n    DrawerNavigationProp<DrawerParamList>\n  >\n>;\n")),Object(r.b)("h3",{id:"annotating-usenavigation"},"Annotating ",Object(r.b)("inlineCode",{parentName:"h3"},"useNavigation")),Object(r.b)("p",null,"To annotate the ",Object(r.b)("inlineCode",{parentName:"p"},"navigation")," prop that we get from ",Object(r.b)("inlineCode",{parentName:"p"},"useNavigation"),", we can use a type parameter:"),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-ts"}),"const navigation = useNavigation<ProfileScreenNavigationProp>();\n")),Object(r.b)("p",null,"It's important to note that this isn't completely type-safe because the type parameter you use may not be correct and we cannot statically verify it."),Object(r.b)("h3",{id:"annotating-useroute"},"Annotating ",Object(r.b)("inlineCode",{parentName:"h3"},"useRoute")),Object(r.b)("p",null,"To annotate the ",Object(r.b)("inlineCode",{parentName:"p"},"route")," prop that we get from ",Object(r.b)("inlineCode",{parentName:"p"},"useRoute"),", we can use a type parameter:"),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-ts"}),"const route = useRoute<ProfileScreenRouteProp>();\n")),Object(r.b)("p",null,"It's important to note that this isn't completely type-safe, similar to ",Object(r.b)("inlineCode",{parentName:"p"},"useNavigation"),"."))}l.isMDXComponent=!0},477:function(e,t,n){"use strict";n.d(t,"a",(function(){return b})),n.d(t,"b",(function(){return d}));var a=n(0),o=n.n(a);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=o.a.createContext({}),l=function(e){var t=o.a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):c({},t,{},e)),n},b=function(e){var t=l(e.components);return o.a.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},m=Object(a.forwardRef)((function(e,t){var n=e.components,a=e.mdxType,r=e.originalType,i=e.parentName,s=p(e,["components","mdxType","originalType","parentName"]),b=l(n),m=a,d=b["".concat(i,".").concat(m)]||b[m]||u[m]||r;return n?o.a.createElement(d,c({ref:t},s,{components:n})):o.a.createElement(d,c({ref:t},s))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=n.length,i=new Array(r);i[0]=m;var c={};for(var p in t)hasOwnProperty.call(t,p)&&(c[p]=t[p]);c.originalType=e,c.mdxType="string"==typeof e?e:a,i[1]=c;for(var s=2;s<r;s++)i[s]=n[s];return o.a.createElement.apply(null,i)}return o.a.createElement.apply(null,n)}m.displayName="MDXCreateElement"}}]);