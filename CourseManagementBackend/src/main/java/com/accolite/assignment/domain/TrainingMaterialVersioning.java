package com.accolite.assignment.domain;

import javax.persistence.*;
import java.util.Date;
import java.util.Objects;

@Entity
public class TrainingMaterialVersioning {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)

    private Long id;
    private Long materialId;
    private String courseName;
    private String link;
    private Date date;

    public TrainingMaterialVersioning(Long materialId, String courseName, String link, Date date){
        this.materialId = materialId;
        this.courseName = courseName;
        this.link = link;
        this.date = date;
    }

    public TrainingMaterialVersioning(){ }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public Long getMaterialId() {
        return materialId;
    }

    public void setMaterialId(Long materialId) {
        this.materialId = materialId;
    }

    public String getCourseName() {
        return courseName;
    }

    public void setCourseName(String courseName) {
        this.courseName = courseName;
    }

    public String getLink() {
        return link;
    }

    public void setLink(String link) {
        this.link = link;
    }

    public Date getDate() {
        return date;
    }

    public void setDate(Date date) {
        this.date = date;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;
        TrainingMaterialVersioning that = (TrainingMaterialVersioning) o;
        return Objects.equals(id, that.id);
    }

    @Override
    public int hashCode() {
        return Objects.hash(id);
    }

    @Override
    public String toString() {
        return "TrainingMaterialVersioning{" +
                "id=" + id +
                ", materialId=" + materialId +
                ", courseName='" + courseName + '\'' +
                ", link='" + link + '\'' +
                ", date=" + date +
                '}';
    }
}
