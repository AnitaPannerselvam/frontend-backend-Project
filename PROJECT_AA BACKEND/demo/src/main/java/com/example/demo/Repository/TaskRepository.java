package com.example.demo.Repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.example.demo.Model.Task;

@Repository
public interface TaskRepository extends JpaRepository<Task, Long> {
}
