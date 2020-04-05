import React, { useEffect, useState, } from 'react'

import { onServer, serverData, } from './onServer'

export function List(props: any) {
	const [ initialList, initScript ] = onServer(serverApi => serverApi.getList(), [], 'app.list')
	const [ list, setList ] = useState<any[]>(initialList)
	const [ newItem, setNewItem ] = useState('')

	const fetchList = async () => {
		var listData: any[] = serverData('app.list')
		if(!listData) {
			const response = await window.fetch('/api/list')
			listData = await response.json()
		}
		setList(listData)
	}

	const addNewItem = async () => {
		await(window.fetch('/api/add', {
			method: 'POST', // or 'PUT'
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify({content: newItem}),
		}))

		await fetchList()
		setNewItem('')
	}

	useEffect(()=>{fetchList()}, [])

	return (
		<div>
			<h1>List</h1>
			<ul>{ list.map(i => <li key={i.id}>{i.content}</li>) }</ul>
			<div>
				<input type="text" value={newItem} onChange={e=>setNewItem(e.target.value)} />
				<button onClick={addNewItem}>Add</button>
			</div>
			{ initScript }
		</div>
	)
}
