package org.cloudicate.server

import org.springframework.http.HttpStatus
import org.springframework.stereotype.Controller
import org.springframework.web.bind.annotation.*

data class Item(val content: String)

@Controller()
@RequestMapping("/api")
class ApiController {
	private val items: MutableList<Item> = ArrayList()
	@GetMapping("/list")
	@ResponseBody
	fun getList(): List<Item> {
		return items
	}

	@PostMapping("/add")
	@ResponseStatus(HttpStatus.ACCEPTED)
	fun addItem(@RequestBody item: Item) {
		items.add(item)
	}
}
