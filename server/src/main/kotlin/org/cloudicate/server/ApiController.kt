package org.cloudicate.server

import org.springframework.beans.factory.annotation.Autowired
import org.springframework.http.HttpStatus
import org.springframework.stereotype.Controller
import org.springframework.web.bind.annotation.*

data class NewItem(val content: String)

@Controller()
@RequestMapping("/api")
class ApiController {
	private val apiService: ApiService

	@Autowired
	constructor(apiService: ApiService) {
		this.apiService = apiService
	}

	@GetMapping("/list")
	@ResponseBody
	fun getList(): List<Item> {
		return apiService.getList()
	}

	@PostMapping("/add")
	@ResponseStatus(HttpStatus.ACCEPTED)
	fun addItem(@RequestBody item: NewItem) {
		apiService.addItem(item.content)
	}
}
