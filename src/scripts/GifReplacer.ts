export class GifReplacer {
	
	private readonly replacedClass = 'azdgif-replaced';
	
	public watchGifLinks(): void {
		this.watchPage();
		this.replaceAll();
	}
	
	private watchPage(): void {
		const observer = new MutationObserver(() => {
			// TODO: enhancement - pass added nodes into scope to replace
			this.replaceAll();
		});

		observer.observe(document.body, {
			childList: true,
			subtree: true
		});
	}
	
	private replaceAll(): void {
		const links = document.querySelectorAll(`a[href$=".gif"]:not(.${this.replacedClass})`);
		
		[...links].forEach(link => {
			link.classList.add(this.replacedClass);
			link.innerHTML = `<img src="${link.textContent}" alt="${link.textContent}" />`;
		});
	}
	
}