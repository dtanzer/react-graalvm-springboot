package net.davidtanzer.reactspring.server

import org.springframework.stereotype.Service
import java.util.*
import kotlin.collections.ArrayList

data class Item(val content: String, val id: UUID)

@Service
class ApiService {
	private val items: MutableList<Item> = ArrayList()

	fun getList(): List<Item> {
		return items
	}

	fun addItem(content: String) {
		items.add(Item(content, UUID.randomUUID()))
	}
}
