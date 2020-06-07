package com.accolite.assignment;

import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.*;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.status;

import com.accolite.assignment.domain.Course;
import com.fasterxml.jackson.databind.ObjectMapper;
import com.fasterxml.jackson.datatype.jdk8.Jdk8Module;
import com.fasterxml.jackson.datatype.jsr310.JavaTimeModule;
import com.fasterxml.jackson.module.paramnames.ParameterNamesModule;
import org.junit.Assert;
import org.junit.Before;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.http.MediaType;
import org.springframework.test.context.junit4.SpringRunner;
import org.springframework.test.web.servlet.MockMvc;
import org.springframework.test.web.servlet.MvcResult;
import org.springframework.test.web.servlet.setup.MockMvcBuilders;
import org.springframework.web.context.WebApplicationContext;

@RunWith(SpringRunner.class)
@SpringBootTest
public class CourseControllerTests {

    private MockMvc mockMvc;
    @Autowired
    private WebApplicationContext context;

    ObjectMapper objectMapper = new ObjectMapper()
            .registerModule(new ParameterNamesModule())
            .registerModule(new Jdk8Module())
            .registerModule(new JavaTimeModule());

    @Before
    public void setUp() {
        mockMvc = MockMvcBuilders.webAppContextSetup(context).build();
    }

    @Test
    public void getCoursesTest() throws Exception {
        MvcResult result = mockMvc.perform(get("/courses")
                .content(MediaType.APPLICATION_JSON_VALUE)).andExpect(status()
                .isOk()).andReturn();

        String resultContent = result.getResponse().getContentAsString();
        Course[] listOfCourses = objectMapper.readValue(resultContent, Course[].class);
        Assert.assertEquals(listOfCourses.length, 3);
    }

    @Test
    public void getCourseByNameTest() throws Exception {
        MvcResult result = mockMvc.perform(get("/courses/Angular")
                .content(MediaType.APPLICATION_JSON_VALUE)).andExpect(status()
                .isOk()).andReturn();

        String resultContent = result.getResponse().getContentAsString();
        Course course = objectMapper.readValue(resultContent, Course.class);
        Assert.assertEquals(course.getCourseName(), "Angular");
    }

    @Test
    public void createCourseTest() throws Exception {
        Course course = new Course();
        course.setCourseName("Web Development");
        course.setDescription("This is an introductory course on web development");
        course.setPreRequisite("Basic Programming");
        course.setInstructorName("Rohan Agrawala");
        String jsonRequest = objectMapper.writeValueAsString(course);
        MvcResult result = mockMvc.perform(post("/courses").content(jsonRequest)
                .contentType(MediaType.APPLICATION_JSON_VALUE)).andExpect(status().isOk()).andReturn();

        String resultContent = result.getResponse().getContentAsString();
        Course response = objectMapper.readValue(resultContent, Course.class);
        Assert.assertEquals(response.getCourseName(), "Web Development");
    }

    @Test
    public void editCourseTest() throws Exception {
        Course course = new Course();
        course.setCourseName("Angular");
        course.setDescription("This is an introductory course on web development");
        course.setPreRequisite("Basic Programming");
        course.setInstructorName("Rohan Agrawala");
        String jsonRequest = objectMapper.writeValueAsString(course);
        MvcResult result = mockMvc.perform(put("/courses/Angular").content(jsonRequest)
                .contentType(MediaType.APPLICATION_JSON_VALUE)).andExpect(status().isOk()).andReturn();

        String resultContent = result.getResponse().getContentAsString();
        Boolean response = objectMapper.readValue(resultContent, Boolean.class);
        Assert.assertTrue(String.valueOf(response), true);
    }

    @Test
    public void deleteCourseTest() throws Exception{
        MvcResult result = mockMvc.perform(delete("/courses/Angular")
                .content(MediaType.APPLICATION_JSON_VALUE)).andExpect(status()
                .isOk()).andReturn();

        String resultContent = result.getResponse().getContentAsString();
        Boolean response = objectMapper.readValue(resultContent, Boolean.class);
        Assert.assertTrue(String.valueOf(response), true);
    }
}
