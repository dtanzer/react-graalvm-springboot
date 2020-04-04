type ServerApi = {
	getList: ()=>string,
}
type ServerCallback = (serverApi: ServerApi)=>string
export function  onServer<T>(callback: ServerCallback, defaultValue: T): T {
	const anyWindow: any = window
	if(anyWindow.isServer) {
		return JSON.parse(callback(anyWindow.api))
	}
	return defaultValue
}