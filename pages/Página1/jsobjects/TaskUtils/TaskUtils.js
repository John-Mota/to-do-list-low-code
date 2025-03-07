export default {
	countPendingTasks: () => {
		// Verifique se os dados estão disponíveis
		if (!get_status.data) {
			return {
				pendingCount: 0,
				pendingPercentage: 0
			};
		}


		const tasks = get_status.data;
		const pendingTasks = tasks.filter(task => task.status === "Pendente");
		const completedTasks = tasks.filter(task => task.status === "Concluída");
		const totalTasks = tasks.length;

		const alta = tasks.filter(task => task.priority === "Alta").length;
		const media = tasks.filter(task => task.priority === "Média").length;
		const baixa = tasks.filter(task => task.priority === "Baixa").length;

		// Calcule a porcentagem de tarefas pendentes
		const pendingPercentage = totalTasks > 0 
		? ((pendingTasks.length / totalTasks) * 100).toFixed(2) 
		: 0;

		const completedTasksPercent = totalTasks > 0
		? ((completedTasks.length / totalTasks) * 100).toFixed(2) : 0;

		// Retorne os resultados
		return {
			pendingCount: pendingTasks.length,
			pendingPercentage: pendingPercentage,
			completedTasks: completedTasks.length,
			completedTasksPercent: completedTasksPercent,
			alta: alta,
			media: media,
			baixa: baixa

		};
	}
};