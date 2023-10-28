import { registerBlockType } from '@wordpress/blocks';
import { __ } from '@wordpress/i18n';

function edit() {
	return (
		<div className="card">
			<div className="card-header">Quote</div>
			<div className="card-body">
				<blockquote className="blockquote mb-0">
					<p>
						Lorem ipsum dolor sit amet, consectetur adipiscing elit.
						Integer posuere erat a ante.
					</p>
					<footer className="blockquote-footer">
						Someone famous in{ ' ' }
						<cite title="Source Title">Source Title</cite>
					</footer>
				</blockquote>
			</div>
		</div>
	);
}

function save() {
	return (
		<div className="card">
			<div className="card-header">Quote</div>
			<div className="card-body">
				<blockquote className="blockquote mb-0">
					<p>
						Lorem ipsum dolor sit amet, consectetur adipiscing elit.
						Integer posuere erat a ante.
					</p>
					<footer className="blockquote-footer">
						Someone famous in{ ' ' }
						<cite title="Source Title">Source Title</cite>
					</footer>
				</blockquote>
			</div>
		</div>
	);
}

registerBlockType( 'custom-blocks/static-card', {
	title: __( 'Static Card', 'custom-blocks' ),
	category: 'custom-blocks',
	icon: 'index-card',
	edit,
	save,
} );
