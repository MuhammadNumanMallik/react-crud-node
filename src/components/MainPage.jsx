import React, { useState } from "react";
import InsertData from "./InsertData";
import ReadEditDelete from "./ReadEditDelete";
import Header from "./header/Header";

export default function MainPage() {
	const [updateItem, setUpdateItem] = useState(null);
	const [refreshCount, setRefreshCount] = useState(0);
	const handleEdit = (item) => {
		setUpdateItem(item);
	};

	const handleClearUpdate = () => {
		setUpdateItem(null);
		setRefreshCount(prevCount => prevCount + 1);
	};
	return (
		<>
		<Header/>
			<InsertData clearUpdate={handleClearUpdate} updateItem={updateItem} setRefreshCount={setRefreshCount}/>
			<hr style={{ width: "100%", borderTop: "3px solid #000" }} />
			<ReadEditDelete onEdit={handleEdit}  refreshCount={refreshCount} setRefreshCount={setRefreshCount}/>
		</>
	);
}
