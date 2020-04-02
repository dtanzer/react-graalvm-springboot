package org.cloudicate.server

import org.springframework.stereotype.Controller
import org.springframework.web.bind.annotation.GetMapping
import org.springframework.web.bind.annotation.ResponseBody

@Controller
class ApiController {
	@GetMapping("/api/list")
	@ResponseBody
	fun getList(): List<String> {
		return listOf("a", "b")
	}
}
