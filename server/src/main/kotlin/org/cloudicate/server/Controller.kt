package org.cloudicate.server

import com.oracle.truffle.js.scriptengine.GraalJSScriptEngine
import org.graalvm.polyglot.Context
import org.graalvm.polyglot.HostAccess
import org.springframework.stereotype.Controller
import org.springframework.util.StopWatch
import org.springframework.web.bind.annotation.GetMapping
import org.springframework.web.bind.annotation.ResponseBody
import java.io.FileReader
import javax.script.ScriptEngineManager
import javax.script.ScriptEngine


@Controller
class HtmlController {
	val indexHtml by lazy {
		HtmlController::class.java.getResource("/reactapp/index.html").readText()
	}
	val runtimeMainJs by lazy {
		HtmlController::class.java.getResource("/reactapp/js/runtime-main.js").readText()
	}
	val mainJs by lazy {
		HtmlController::class.java.getResource("/reactapp/js/main.chunk.js").readText()
	}
	val secondJs by lazy {
		HtmlController::class.java.getResource("/reactapp/js/2.chunk.js").readText()
	}
	val initJs by lazy(::readInitJs)
	val renderJs by lazy(::readRenderJs)
	val engine by lazy(::initializeEngine)

	@GetMapping("/")
	@ResponseBody
	fun blog(): String {
		val html = engine.eval(renderJs)
		return indexHtml.replace("<div id=\"root\"></div>", "<div id=\"root\">$html</div>")
	}

	private fun readInitJs(): String {
		val startIndex = indexHtml.indexOf("<script>")+"<script>".length
		val endIndex = indexHtml.indexOf("</script>", startIndex)

		return indexHtml.substring(startIndex, endIndex)
	}

	private fun readRenderJs(): String {
		val startIndex = indexHtml.indexOf("<script defer=\"defer\" type=\"module\">")+"<script defer=\"defer\" type=\"module\">".length
		val endIndex = indexHtml.indexOf("</script>", startIndex)

		return indexHtml.substring(startIndex, endIndex)
	}

	private fun initializeEngine(): GraalJSScriptEngine {
		val sw = StopWatch()
		sw.start()
		val engine = GraalJSScriptEngine.create(null,
				Context.newBuilder("js")
						.allowHostAccess(HostAccess.ALL)
						.allowHostClassLookup({ s -> true }))

		engine.eval("window = { location: { hostname: 'localhost' } }")
		engine.eval("navigator = {}")
		engine.eval(runtimeMainJs)
		engine.eval(mainJs)
		engine.eval(secondJs)
		engine.eval(initJs)
		engine.eval("window.isServer = true")

		sw.stop();
		println("Graalvm initialized: "+sw.totalTimeSeconds)

		return engine
	}

}
