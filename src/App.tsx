import { ChangeEvent, useState } from 'react';
import styles from './home.module.css';
import { IData } from './interfaces';
import { data } from './constants';

const App = (): JSX.Element => {
	const [title, setTitle] = useState<string>();
	const [arr, setArr] = useState<IData[]>(data);

	const changeHandler = (evn: ChangeEvent<HTMLInputElement>): void => {
		setTitle(evn.target.value);
	};

	const hanleSubmit = (): void => {
		if (!title?.length) return;
		const newData = {
			title: title,
			id: new Date().getTime(),
			description: 'description',
		};
		setArr([...arr, newData]);
		setTitle('');
	};

	const deleteItem = (id: number): void => {
		const newData = arr.filter(c => c.id != id);
		setArr(newData);
	};
	return (
		<div className={styles.todo}>
			<h1 className={styles.title}>APP Todo</h1>
			<input className={styles.input} type='text' placeholder='Enter todo' value={title} onChange={changeHandler} />
			<button className={styles.button} onClick={hanleSubmit}>
				Send
			</button>

			<div className={styles.card}>
				{arr.map(c => (
					<div key={c.id} className={styles.cardItem}>
						<p>{c.title}</p>
						<div className={styles.delBtn}>
							<button onClick={() => deleteItem(c.id)}>Delet</button>
							<img src='' alt='' />
						</div>
					</div>
				))}
			</div>
		</div>
	);
};

export default App;
