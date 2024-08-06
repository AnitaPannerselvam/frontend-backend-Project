package com.example.demo.Service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.demo.Model.TaskCategory;
import com.example.demo.Repository.TaskCategoryRepository;

@Service
public class TaskCategoryService {

    @Autowired
    private TaskCategoryRepository taskCategoryRepository;

    public TaskCategory save(TaskCategory taskCategory) {
        return taskCategoryRepository.save(taskCategory);
    }

    public TaskCategory getById(Long id) {
        return taskCategoryRepository.findById(id).orElse(null);
    }

    public void delete(Long id) {
        taskCategoryRepository.deleteById(id);
    }

    public TaskCategory update(Long id, TaskCategory taskCategory) {
        if (taskCategoryRepository.existsById(id)) {
            taskCategory.setId(id);
            return taskCategoryRepository.save(taskCategory);
        } else {
            throw new RuntimeException("TaskCategory not found with id " + id);
        }
    }
}
