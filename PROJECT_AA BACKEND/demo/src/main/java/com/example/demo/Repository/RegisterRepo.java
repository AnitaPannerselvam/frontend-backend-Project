package com.example.demo.Repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import com.example.demo.Model.Register;

public interface RegisterRepo extends JpaRepository<Register, Long> {
    List<Register> findByEmail(String email);
}
