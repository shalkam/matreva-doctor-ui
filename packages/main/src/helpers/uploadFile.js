export default function uploadFile(file, mutate) {
	return mutate({
		variables: {
			file
		}
	});
}
