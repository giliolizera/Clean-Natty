<!-- <template>
	<div id="app">
		<h1>My Calendar</h1>
		<CalendarView
			:show-date="showDate"
			class="theme-default holiday-us-traditional holiday-us-official">
			<template #header="{ headerProps }">
				<CalendarViewHeader
					:header-props="headerProps"
					@input="setShowDate" />
			</template>
		</CalendarView>
	</div>
</template>
<script>
	import { CalendarView, CalendarViewHeader } from "vue-simple-calendar" 

	// import "..relative-path-to-node_modules/vue-simple-calendar/dist/style.css"

	export default {
		name: 'app',
		data: function() {
			return { showDate: new Date() }
		},
		components: {
			CalendarView,
			CalendarViewHeader,
		},
		methods: {
			setShowDate(d) {
				this.showDate = d;
			},
		}
	}
</script> -->
