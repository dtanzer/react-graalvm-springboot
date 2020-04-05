import React, { ReactElement, } from 'react'

type ServerApi = {
	getList: ()=>string,
}
type ServerCallback = (serverApi: ServerApi)=>string
export function onServer<T>(callback: ServerCallback, defaultValue: T, valueIdentifier: string): [ T, ReactElement? ] {
	const anyWindow: any = window
	if(anyWindow.isServer) {
		const jsonValue = callback(anyWindow.api);
		const sanitizedJson = jsonValue
			.replace(/\\/g, '\\\\')
			.replace(/"/g, '\\"')
			.replace(/</g, '&lt;')
			.replace(/>/g, '&gt;')
		
		const scriptContent = `
		<script>
		if(!window.serverData) { window.serverData = {}}
		window.serverData['${valueIdentifier}'] = JSON.parse("${sanitizedJson}".replace(/&lt;/g, '<').replace(/&gt;/g, '>'))
		</script>
		`
		const initScript = <div dangerouslySetInnerHTML={{ __html: scriptContent}}></div>
		return [ JSON.parse(jsonValue), initScript ]
	}
	return [ defaultValue, undefined ]
}

export function serverData(valueIdentifier: string): any {
	const anyWindow: any = window
	if(anyWindow.serverData) {
		const value = anyWindow.serverData[valueIdentifier]
		anyWindow.serverData[valueIdentifier] = undefined
		return value
	}
	return undefined
}