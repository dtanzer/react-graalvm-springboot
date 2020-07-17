# react-graalvm-springboot

I created this project to find out how to do React server-side rendering (SSR) with Spring Boot and GraalVM.

Read about what I did, how I did it and why it works here:

* [Spring and Isomorphic React 1: Setup with GraalVM](https://www.devteams.at/react_spring_boot/2020/03/17/spring-isomorphic-react-1-setup-with-graalvm.html): How I set up the project so I could develop the React / Typescript app with create-react-app; But also render the same webpack-optimized production build on the server, inside a JVM.
* [Spring and Isomorphic React 2: React Router](https://www.devteams.at/react_spring_boot/2020/03/25/spring-isomorphic-react-2-react-router.html) How to get routing and navigation to work with react-router - Both on the client side and also on the server side.
* [Spring and Isomorphic React 3: First-Load Performance](https://www.devteams.at/react_spring_boot/2020/03/30/spring-isomorphic-react-3-first-load-performance.html) Here I measured the first-load performance of the application and added some tweaks to improve it. After that, the SSRd app took less than half of the time to first render something than rendering client-side only.
* [Spring and Isomorphic React 4: Render Data on the Server Side](https://www.devteams.at/react_spring_boot/2020/04/06/spring-isomorphic-react-4-server-side-data.html) In this post, I'll show you how to load data dynamically after a client-side navigation over REST. And when the same view is rendered on the server, that data is loaded via a JVM-internal method call (JavaScript to Java) and populated in the HTML code, so that the client side can pick it up without making another network request.

I hope you enjoy the blog posts and find the code useful ;) If you have any questions or feedback, please ad an issue here or ping me on Twitter - I am @dtanzer there.
