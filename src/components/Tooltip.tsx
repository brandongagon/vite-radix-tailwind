import { Tooltip } from "radix-ui"

export default () => (
	<Tooltip.Root>
		<Tooltip.Trigger asChild>
			<a href="https://www.radix-ui.com/">Radix UI</a>
		</Tooltip.Trigger>
		<Tooltip.Portal>…</Tooltip.Portal>
	</Tooltip.Root>
)
