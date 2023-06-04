import '../styles/globals.css'
import type { AppProps } from 'next/app'
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import Head from 'next/head';

import ToDoListProvider  from '../context/TodoAppList'
export default function App({ Component, pageProps }: AppProps) {
  return <>
    <Head>
      <link
        rel="stylesheet"
        href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap"
      />
				<title> home page</title>
    </Head>
    <ToDoListProvider >
    <div className='relative flex flex-auto w-full bg-slate-900' style={{height: '100vh'}}>
    <Component {...pageProps} />
    </div>
    </ToDoListProvider>
  </>
}
