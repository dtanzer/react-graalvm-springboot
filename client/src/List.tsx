import React, { useEffect, useState, } from 'react'

export function List(props: any) {
	const [ list, setList ] = useState<any[]>([])
	const [ newItem, setNewItem ] = useState('')

	const fetchList = async () => {
		const response = await window.fetch('/api/list')
		const list = await response.json()
		setList(list)
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
			<ul>{list.map(i => <li key={i.id}>{i.content}</li>)}</ul>
			<div>
				<input type="text" value={newItem} onChange={e=>setNewItem(e.target.value)} />
				<button onClick={addNewItem}>Add</button>
			</div>
		</div>
	)
}
