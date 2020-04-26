package net.davidtanzer.reactspring.server

import com.fasterxml.jackson.databind.ObjectMapper
import org.springframework.beans.factory.annotation.Autowired
import org.springframework.stereotype.Service

@Service
class ServerApi @Autowired constructor(val apiService: ApiService) {
	fun getList(): String {
		return ObjectMapper().writeValueAsString(apiService.getList())
	}
}
