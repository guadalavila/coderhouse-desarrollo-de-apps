import React, { useState } from "react";
import { StyleSheet, View } from "react-native";
import ButtonCustom from "./ButtonCustom";
import Header from "./Header";
import InputTodo from "./InputTodo";
import ListTodo from "./ListTodo";
import ModalCustom from "./ModalCustom";

const Layout = () => {
    const [task, setTask] = useState("");
    const [tasks, setTasks] = useState([]);
    const [showModal, setShowModal] = useState(false);

    const deleteTask = (id) => {
        const updTasks = tasks.filter((x) => x.id !== id);
        setTasks([...updTasks]);
    };

    const changeStateTask = (task) => {
        const tasks_ = tasks.filter((t) => t.id !== task.id);
        setTasks([...tasks_, { ...task, todo: true }]);
    };
    return (
        <View style={styles.container}>
            <Header title={"TODO LIST"} onPress={() => setShowModal(true)} />
            <InputTodo task={task} setTask={setTask} />
            <ListTodo
                list={tasks}
                onHandleDelete={(id) => deleteTask(id)}
                onHandleComplete={(task) => changeStateTask(task)}
            />
            <ButtonCustom
                disabled={task.length === 0}
                label={"AGREGAR TAREA"}
                onPress={() => {
                    setTasks([
                        ...tasks,
                        { todo: false, task: task, id: Date.now() },
                    ]);
                    setTask("");
                }}
            />
            {/* {showModal && (
                <ModalCustom
                    totalTask={tasks.length}
                    onCancel={() => setShowModal(false)}
                />
            )} */}
        </View>
    );
};

export default Layout;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: 40,
        backgroundColor: "white",
    },
});
