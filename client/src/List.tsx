import React, { useEffect, useState, } from 'react'

export function List(props: any) {
	const [ list, setList ] = useState<any[]>([])

	const fetchList = async () => {
		const response = await window.fetch('/api/list')
		const list = await response.json()
		setList(list)
	}

	useEffect(()=>{fetchList()}, [])

	return (
		<div>
			<h1>List</h1>
			<ul>{list.map(s => <li>{s}</li>)}</ul>
		</div>
	)
}
